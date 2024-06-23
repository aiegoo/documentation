function [ Result ] = Factorial2( Value )
%Factorial2 - Calculates the value of n!
%   Outputs the factorial value of the input number.
    if Value > 1
        Result = Factorial2(Value - 1) * Value;
    else
        Result = 1;
    end

end

