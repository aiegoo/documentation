function [ ] = SimpleSwitch( Value )
%SimpleSwitch Makes one of multiple decisions based on the content of
%Value.
%   Is Value equal to 1, 2, 3, or something else?

switch Value
    case 1
        disp('You typed 1.');
    case 2
        disp('You typed 2.');
    case 3
        disp('You typed 3.');
    otherwise
        disp('You typed an alternative value.');
end

end

