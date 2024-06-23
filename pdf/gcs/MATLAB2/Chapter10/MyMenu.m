EndIt = false;

while not(EndIt)
    clc
    disp('Choose a Fruit');
    disp('1. Orange');
    disp('2. Grape');
    disp('3. Cherry');
    disp('4. I''m Bored, Let''s Quit!');
    
    Select = input('Choose an option: ', 's');
    if isnan(str2double(Select))
        disp('Provide numeric input, press Enter');
        pause
        continue;
    end
    
    if Select == '4'
        disp('Sorry to see you go.');
        EndIt = true;
    else
        switch Select
            case '1'
                disp('You chose an orange!');
            case '2'
                disp('You chose a grape!');
            case '3'
                disp('You chose a cherry!');
            otherwise
                disp('You''re confused, quitting!');
                break;
        end
        pause(2)
    end
end
    
