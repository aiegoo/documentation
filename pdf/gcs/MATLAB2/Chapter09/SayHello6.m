function [ HelloString ] = SayHello6( Name )
%SayHello()
%   This function says Hello to everyone!
%   It requires a string, Name, as input.
%   It passes back the result as HelloString.
HelloString = [GetGreeting(), Name, '!'];
disp(HelloString);

end

function [ Greeting ] = GetGreeting ( )
Greeting = 'Hello There ';
end

