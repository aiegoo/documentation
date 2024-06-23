function [ ] = TestCustomException( )
%TESTCUSTOMEXCEPTION Tests the CustomException() function.
%   Performs detailed testing of the CustomException() function
%   by checking for input type and ranges.

    % Check for no input.
    try
        disp('Testing no input.');
        CustomException();
    catch Exc
        disp(Exc.getReport());
    end
    % Check for logical input.
    try
        disp('Testing logical input.');
        CustomException(true);
    catch Exc
        disp(Exc.getReport());
    end
    % Check for string input.
    try
        disp('Testing string input.');
        CustomException('Hello');
    catch Exc
        disp(Exc.getReport());
    end
    % Check for number out of range.
    try
        disp('Testing input too low.');
        CustomException(-1);
    catch Exc
        disp(Exc.getReport());
    end
    try
        disp('Testing input too high.');
        CustomException(12);
    catch Exc
        disp(Exc.getReport());
    end
    % Check for good input.
    try
        disp('Testing input just right.');
        CustomException(5);
    catch Exc
        disp(Exc.getReport());
    end
end