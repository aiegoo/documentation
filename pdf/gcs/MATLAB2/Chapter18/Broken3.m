function [ ] = Broken3( )
%BROKEN3 A broken piece of code.
%   This example is designed to generate an error
%   and send an e-mail about it.

    try
        Handle = fopen('DoesNotExist.txt');
        Data = fread(Handle);
        disp(Data);
    catch exc
        disp('Sending for help!');
        sendmail('myaddress@mycompany.com',...
            'Broken2',...
            ['Identifier: ', exc.identifier,10,...
             'Message: ', exc.message]);
    end
end