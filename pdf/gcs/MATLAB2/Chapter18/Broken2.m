function [ ] = Broken2( )
%BROKEN2 A broken piece of code.
%   This example is designed to generate an error
%   and display a report about it.

    try
        Handle = fopen('DoesNotExist.txt');
        Data = fread(Handle);
        disp(Data);
    catch exc
        disp('Oops, an error has occurred!');
        disp(exc.getReport());
    end
end