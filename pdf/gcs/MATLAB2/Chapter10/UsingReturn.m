function [ Result ] = UsingBreak( Times )
%SimpleWhile: Demonstrates the while loop
%   Tell the application how many times to say hello!
%   Don't exceed five times or the application will cut you off!

    if nargin < 1
        Times = 3;
    end
    
    Result = 'Success!';
    
    SayIt = 1;
    while SayIt <= Times
        disp('Howdy!')
        SayIt = SayIt + 1;
        if SayIt > 5
            disp('Sorry, too many Howdies')
            Result = 'Oops!';
            return;
        end
    end
end

