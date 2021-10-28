%% Trim Model to Meet State Specifications
%%
% Open the Simulink model.
mdl = 'watertank';
open_system(mdl)

%%
% Trim the model to find a steady-state operating point where the water
% tank level is |10|.

%%
% Create default operating point specification object.
opspec = operspec(mdl);

%%
% Configure specifications for the first model state. The first state must
% be at steady state with a lower bound of |0|. Provide an initial guess of
% |2| for the state value.
opspec.States(1).SteadyState = 1;
opspec.States(1).x = 2;
opspec.States(1).Min = 0;

%%
% Configure the second model state as a known state with a value of |10|.
opspec.States(2).Known = 1;
opspec.States(2).x = 10;

%%
% Find the operating point that meets these specifications.
op = findop(mdl,opspec);

%% 
% Copyright 2012 The MathWorks, Inc.