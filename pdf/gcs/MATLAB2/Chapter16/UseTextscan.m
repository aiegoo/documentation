function [ ] = UseTextscan( )
%UseTextscan: A demonstration of the textscan() function
%   This example shows how to use textscan() to scan
%   the NumericData.csv file.

    FileID = fopen('NumericData.csv');
    TSOutput = textscan(FileID, '%d,%d,%d/n');
    while not(feof(FileID))
        TempData = textscan(FileID, '%d,%d,%d/n');
        if feof(FileID)
            break;
        end
        TSOutput = [TSOutput; TempData];
    end
    disp(TSOutput);
    fclose(FileID);
end