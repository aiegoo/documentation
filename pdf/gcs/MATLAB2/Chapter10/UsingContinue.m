function [ ] = UsingContinue( Times )
%SimpleWhile: Demonstrates the while loop
%   Tell the application which iterations to process.
%   Iteration five displays a special message.

    if nargin < 1
        Times = 3;
    end
    
    SayIt = 1;
    while SayIt <= Times
        if SayIt == 5
            disp('Welcome to iteraction 5!')
            SayIt = SayIt + 1;
            continue;
        end
        disp('Howdy!')
        SayIt = SayIt + 1;
    end
end

