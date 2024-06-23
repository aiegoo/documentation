function [ ] = ErrorAndWarning( )
%ERRORANDWARNING Create Error and Warning Messages
%   This example shows how to create error and warning messages.

    NotDone = true;

    while NotDone
        try

            Value = input('Type something: ', 's');

            switch Value
                case 'error'
                    error('Input Error');
                case 'warning'
                    warning('Input Warning');
                case 'done'
                    NotDone = false;
                otherwise
                    disp(['You typed: ', Value]);
            end
        catch Exception
            disp('An exception occurred!');
            disp(Exception.getReport());
        end
    end

end