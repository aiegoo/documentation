function [ ] = SimpleWhile( Times )
%SimpleWhile: Demonstrates the while loop
%   Tell the application how many times to say hello!

    if nargin < 1
        Times = 3;
    end
    
    SayIt = 1;
    while SayIt <= Times
        disp('Howdy!')
        SayIt = SayIt + 1;
    end
end

