function [ ] = CustomException( Value )
%CUSTOMEXCEPTION Demonstrates custom exceptions.
%   This example shows how to put a custom exception
%   together.

    if nargin < 1
        NoInput = MException('MyCompany:NoInput',...
            'Not enough input arguments!');
        NoInput.throw();
    end

    if not(isnumeric(Value))
        NotNumeric = MException('MyCompany:NotNumeric',...
            'Input argument is type %s number needed!',...
            class(Value));
        NotNumeric.throw();
    end

    if (Value < 1) || (Value > 10)
        NotInRange = MException('MyCompany:NotInRange',...
            'Input argument not between %d and %d!',...
            1, 10);
        NotInRange.throw();
    end
    fprintf('Successfully entered the value: %d.\r',...
        Value);

end