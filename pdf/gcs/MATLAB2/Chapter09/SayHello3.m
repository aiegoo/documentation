function [ HelloString ] = SayHello3( Name )
%SayHello()
%   This function says Hello to everyone!
%   It requires a string, Name, as input.
%   It passes back the result as HelloString.
HelloString = ['Hello There ', Name, '!'];
disp(HelloString);

end

