function [ Result ] = Factorial1( Value, Level )
%Factorial1
%    Calculate the factorial (n!) of the input number Value.
%    Level tracks the current recursive loop.
%    Result contains the function output.

if nargin < 2
    Level = 1;
end

if Value > 1
    Result = Factorial1(Value - 1, Level + 1) * Value;
else
    Result = 1;
end

end

