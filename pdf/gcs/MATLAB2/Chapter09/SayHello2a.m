function [ ] = SayHello2a( Name )
%SayHello()
%   This function says Hello to everyone!
%   It allows an optional a string, Name, as input;
%   Name has a default value of 'Good Looking'.
if nargin < 1
    Name = 'Good Looking';
end
disp(['Hello There ', Name, '!']);
end
