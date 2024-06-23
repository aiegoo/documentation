function [ ] = SayHello4( Name )
%   This function says Hello to everyone using
%   a global variable!
%   It requires a string, Name, as input.
%   HelloString is now a global variable.
global HelloString
HelloString = ['Hello There ', Name, '!'];
disp(HelloString);

end

