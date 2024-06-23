function [ ] = IfElseIf( Value )
%IfElseIf Makes one of multiple decisions based on a more complex condition.
%   Is Value greater than or euqal to 5?
if Value > 5
    disp('The input value is greater than 5!');
elseif Value == 5
    disp('The input value is equal to 5!');
else
    disp('The input value is less than 5!');
end

end

