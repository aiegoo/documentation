function [ ] = Broken( )
%BROKEN A broken piece of code.
%   This example is designed to generate an error.

    try
        Handle = fopen('DoesNotExist.txt');
        Data = fread(Handle);
        disp(Data);
    catch exc
        disp('Oops, an error has occurred!');
        disp(exc)
    end
end