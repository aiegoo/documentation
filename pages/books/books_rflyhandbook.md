---
title: lab handbook
tags: [books, getting_started]
last_updated: August 31, 2021
keywords: API, content API, UI text, inline help, context-sensitive help, popovers, tooltips
summary: ""
sidebar: mydoc_sidebar
permalink: books_rflyhandbook.html
folder: books
complex_map: true
map_name: rfly
box_number: 3
---

{% include custom/series_matlab_next.html %}
# Commercial configuration

## Slam
[doc](https://kr.mathworks.com/help/nav/ref/slammapbuilder-app.html)

- rotations, orientation, and quaternions
- introduction to simulating IMU measurements
- estimate positon and orientation of a ground vehicle
- esitamte robot pose with scan matching
- plan mobile robot paths using RRT (rapidly exploring random tree)
- implement simultaneous localization and mapping with algorithm
- perform slam using 3-d lidar point clouds

[![image](https://user-images.githubusercontent.com/42961200/129006952-8894b07f-de23-4d9f-bf39-c2a3ee532549.png)](https://kr.mathworks.com/help/nav/ug/motion-planning-in-urban-environments-using-dynamics-occupancy-grid-map.html)

[![dynamicmap](./images/MotionPlanningUsingDynamicMapExample_03.gif)](https://kr.mathworks.com/help/nav/ug/motion-planning-in-urban-environments-using-dynamics-occupancy-grid-map.html)

![](./pdf/gcs/matlab_flightsim.gif)

```cpp
classdef FlightInstrumentsExample < matlab.apps.AppBase

    % Properties that correspond to app components
    properties (Access = public)
        FlightInstrumentsFlightDataPlaybackUIFigure  matlab.ui.Figure
        Image                  matlab.ui.control.Image
        AirspeedIndicator      Aero.ui.control.AirspeedIndicator
        ArtificialHorizon      Aero.ui.control.ArtificialHorizon
        Altimeter              Aero.ui.control.Altimeter
        TurnCoordinator        Aero.ui.control.TurnCoordinator
        HeadingIndicator       Aero.ui.control.HeadingIndicator
        ClimbIndicator         Aero.ui.control.ClimbIndicator
        Time000secSliderLabel  matlab.ui.control.Label
        Time000secSlider       matlab.ui.control.Slider
        PiperPA24ComancheFlightDataDisplayLabel  matlab.ui.control.Label
    end

    
    properties (Access = public)
        simdata % Saved flight data [time X Y Z phi theta psi] 
        animObj % Aero.Animation object
    end
    

    % Callbacks that handle component events
    methods (Access = private)

        % Code that executes after component creation
        function startupFcn(app)
            
            % Load saved flight status data
            savedData = load(fullfile(matlabroot, 'toolbox', 'aero', 'astdemos', 'simdata.mat'), 'simdata');
            yaw = savedData.simdata(:,7);
            yaw(yaw<0) = yaw(yaw<0)+2*pi; % unwrap yaw angles
            savedData.simdata(:,7) = yaw;
            app.simdata = savedData.simdata;
            
            % Create animation object to visualize aircraft flight dynamics corresponding with saved data over time 
            app.animObj = Aero.Animation;
            app.animObj.createBody('pa24-250_orange.ac','Ac3d'); % Piper PA-24 Comanche geometry
            app.animObj.Bodies{1}.TimeseriesSourceType = 'Array6DoF'; % [time X Y Z phi theta psi]
            app.animObj.Bodies{1}.TimeSeriesSource = app.simdata;
            app.animObj.Camera.PositionFcn = @staticCameraPosition;
            app.animObj.Figure.Position = [app.FlightInstrumentsFlightDataPlaybackUIFigure.Position(1)+625 app.FlightInstrumentsFlightDataPlaybackUIFigure.Position(2) app.FlightInstrumentsFlightDataPlaybackUIFigure.Position(3) app.FlightInstrumentsFlightDataPlaybackUIFigure.Position(4)];
            app.animObj.updateBodies(app.simdata(1,1)); % Initialize animation window at t=0
            app.animObj.updateCamera(app.simdata(1,1));
            app.animObj.show();

        end

        % Value changing function: Time000secSlider
        function Time000secSliderValueChanging(app, event)
            
            % Display current time in slider component
            t = event.Value;
            app.Time000secSliderLabel.Text = sprintf('Time: %.1f sec', t);           
            
            % Find corresponding time data entry
            k = find(app.simdata(:,1)<=t);
            k = k(end);
            
            app.Altimeter.Altitude = convlength(-app.simdata(k,4), 'm', 'ft');
            app.HeadingIndicator.Heading = convang(app.simdata(k,7),'rad','deg');
            app.ArtificialHorizon.Roll = convang(app.simdata(k,5),'rad','deg');
            app.ArtificialHorizon.Pitch = convang(app.simdata(k,6),'rad','deg');
            
            if k>1
                % Estimate velocity and angular rates
                Vel = (app.simdata(k,2:4)-app.simdata(k-1,2:4))/(app.simdata(k,1)-app.simdata(k-1,1));
                rates = (app.simdata(k,5:7)-app.simdata(k-1,5:7))/(app.simdata(k,1)-app.simdata(k-1,1));
                
                app.AirspeedIndicator.Airspeed = convvel(sqrt(sum(Vel.^2)),'m/s','kts');
                app.ClimbIndicator.ClimbRate = convvel(-Vel(3),'m/s','ft/min');

                % Estimate turn rate and slip behavior 
                app.TurnCoordinator.Turn = convangvel(rates(1)*sind(30) + rates(3)*cosd(30),'rad/s','deg/s');
                app.TurnCoordinator.Slip = 1/(2*pi)*convang(atan(rates(3)*sqrt(sum(Vel.^2))/9.81)-app.simdata(k,5),'rad','deg');
            else
                % time = 0
                app.ClimbIndicator.ClimbRate = 0;
                app.AirspeedIndicator.Airspeed = 0;
                app.TurnCoordinator.Slip = 0;
                app.TurnCoordinator.Turn = 0;
            end
            
            %% Update animation window display
            app.animObj.updateBodies(app.simdata(k,1));
            app.animObj.updateCamera(app.simdata(k,1));
            
        end

        % Close request function: 
        % FlightInstrumentsFlightDataPlaybackUIFigure
        function FlightInstrumentsFlightDataPlaybackUIFigureCloseRequest(app, event)
            % Close animation figure with app
            delete(app.animObj);
            delete(app);
           
        end
    end

    % Component initialization
    methods (Access = private)

        % Create UIFigure and components
        function createComponents(app)

            % Create FlightInstrumentsFlightDataPlaybackUIFigure and hide until all components are created
            app.FlightInstrumentsFlightDataPlaybackUIFigure = uifigure('Visible', 'off');
            app.FlightInstrumentsFlightDataPlaybackUIFigure.AutoResizeChildren = 'off';
            app.FlightInstrumentsFlightDataPlaybackUIFigure.Color = [0.2706 0.2706 0.2784];
            app.FlightInstrumentsFlightDataPlaybackUIFigure.Position = [100 100 620 550];
            app.FlightInstrumentsFlightDataPlaybackUIFigure.Name = 'Flight Instruments - Flight Data Playback';
            app.FlightInstrumentsFlightDataPlaybackUIFigure.Resize = 'off';
            app.FlightInstrumentsFlightDataPlaybackUIFigure.CloseRequestFcn = createCallbackFcn(app, @FlightInstrumentsFlightDataPlaybackUIFigureCloseRequest, true);

            % Create Image
            app.Image = uiimage(app.FlightInstrumentsFlightDataPlaybackUIFigure);
            app.Image.Position = [8 -2 606 577];
            app.Image.ImageSource = 'appdesignerInstrumentPanel.png';

            % Create AirspeedIndicator
            app.AirspeedIndicator = uiaeroairspeed(app.FlightInstrumentsFlightDataPlaybackUIFigure);
            app.AirspeedIndicator.Limits = [25 250];
            app.AirspeedIndicator.ScaleColorLimits = [0 60;50 200;200 225;225 250];
            app.AirspeedIndicator.Position = [22 317 185 185];

            % Create ArtificialHorizon
            app.ArtificialHorizon = uiaerohorizon(app.FlightInstrumentsFlightDataPlaybackUIFigure);
            app.ArtificialHorizon.Position = [219 317 185 185];

            % Create Altimeter
            app.Altimeter = uiaeroaltimeter(app.FlightInstrumentsFlightDataPlaybackUIFigure);
            app.Altimeter.Position = [416 317 185 185];

            % Create TurnCoordinator
            app.TurnCoordinator = uiaeroturn(app.FlightInstrumentsFlightDataPlaybackUIFigure);
            app.TurnCoordinator.Position = [22 70 185 185];

            % Create HeadingIndicator
            app.HeadingIndicator = uiaeroheading(app.FlightInstrumentsFlightDataPlaybackUIFigure);
            app.HeadingIndicator.Position = [219 70 185 185];

            % Create ClimbIndicator
            app.ClimbIndicator = uiaeroclimb(app.FlightInstrumentsFlightDataPlaybackUIFigure);
            app.ClimbIndicator.MaximumRate = 8000;
            app.ClimbIndicator.Position = [416 70 185 185];

            % Create Time000secSliderLabel
            app.Time000secSliderLabel = uilabel(app.FlightInstrumentsFlightDataPlaybackUIFigure);
            app.Time000secSliderLabel.HorizontalAlignment = 'right';
            app.Time000secSliderLabel.FontSize = 11.5;
            app.Time000secSliderLabel.FontColor = [1 1 1];
            app.Time000secSliderLabel.Position = [267 3 80 22];
            app.Time000secSliderLabel.Text = 'Time: 00.0 sec';

            % Create Time000secSlider
            app.Time000secSlider = uislider(app.FlightInstrumentsFlightDataPlaybackUIFigure);
            app.Time000secSlider.Limits = [0 49.833333333333];
            app.Time000secSlider.MajorTicks = [0 2 4 6 8 10 12 14 16 18 20 22 24 26 28 30 32 34 36 38 40 42 44 46 48 49.833333333333];
            app.Time000secSlider.MajorTickLabels = {'0', '2', '4', '6', '8', '10', '12', '14', '16', '18', '20', '22', '24', '26', '28', '30', '32', '34', '36', '38', '40', '42', '44', '46', '48', '50'};
            app.Time000secSlider.ValueChangingFcn = createCallbackFcn(app, @Time000secSliderValueChanging, true);
            app.Time000secSlider.MinorTicks = [];
            app.Time000secSlider.FontSize = 11.5;
            app.Time000secSlider.FontColor = [1 1 1];
            app.Time000secSlider.Position = [50 55 520 3];

            % Create PiperPA24ComancheFlightDataDisplayLabel
            app.PiperPA24ComancheFlightDataDisplayLabel = uilabel(app.FlightInstrumentsFlightDataPlaybackUIFigure);
            app.PiperPA24ComancheFlightDataDisplayLabel.BackgroundColor = [0.8 0.8 0.8];
            app.PiperPA24ComancheFlightDataDisplayLabel.HorizontalAlignment = 'center';
            app.PiperPA24ComancheFlightDataDisplayLabel.FontName = 'Courier New';
            app.PiperPA24ComancheFlightDataDisplayLabel.FontSize = 14;
            app.PiperPA24ComancheFlightDataDisplayLabel.FontWeight = 'bold';
            app.PiperPA24ComancheFlightDataDisplayLabel.Position = [141 515 347 22];
            app.PiperPA24ComancheFlightDataDisplayLabel.Text = 'Piper PA-24 Comanche Flight Data Display';

            % Show the figure after all components are created
            app.FlightInstrumentsFlightDataPlaybackUIFigure.Visible = 'on';
        end
    end

    % App creation and deletion
    methods (Access = public)

        % Construct app
        function app = FlightInstrumentsExample

            % Create UIFigure and components
            createComponents(app)

            % Register the app with App Designer
            registerApp(app, app.FlightInstrumentsFlightDataPlaybackUIFigure)

            % Execute the startup function
            runStartupFcn(app, @startupFcn)

            if nargout == 0
                clear app
            end
        end

        % Code that executes before app deletion
        function delete(app)

            % Delete UIFigure when app is deleted
            delete(app.FlightInstrumentsFlightDataPlaybackUIFigure)
        end
    end
end
```
{% include tony.html content="matlab tutorials and gcs.uno are the main source of learning for now" %}

{% include custom/series_matlab_next.html %}
