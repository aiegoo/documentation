%% Creating the prompt.
% Tell MATLAB what to display on screen.
Prompt = ['Type your own name, but only if it isn''t ',...
          'Wednesday.\nType the name of the neighbor ',...
          'on your right on Wednesday.\nHowever, on ',...
          'a Wednesday with a full moon, type the ',...
          'name of\nthe neighbor on your left! '];

%% Getting user input.
% Obtain the user's name so it can
% be displayed on screen.
Name = input(Prompt, 's');

%% Displaying the input on screen.
% Output a message to make the user feel welcome.
disp(['Hello ', Name]);