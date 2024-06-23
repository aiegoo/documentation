function [ ] = SimpleFor( Times )
%SimpleFor: Demonstrates the for loop
%   Tell the application how many times to say hello!

    if nargin < 1
        Times = 3;
    end
    
    for SayIt = 1:Times
        disp('Howdy!')
    end
end

