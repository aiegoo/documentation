classdef MyClass
    %MYCLASS provides an example of class creation.
    % It shows how to define properties and methods.
    
    properties
        Property1
    end
    
    properties (Constant)
        pi = 3.141592653589793238;
    end
    
    properties (GetAccess=private)
        Property2
    end
    
    properties (SetAccess=private)
        Property3
    end
    
    properties (Dependent)
        Property4
    end
    
    methods
        function obj = MyClass(Prop1, Prop2, Prop3)
            %MYCLASS Construct an instance of this class
            %   This constructor will takve a variable
            %   number of arguments. The arguments appear
            %   in order for Property1, Property2,
            %   and Property3.
            
            if nargin >= 1
                obj.Property1 = Prop1;
            else
                obj.Property1 = 0;
            end
            
            if nargin >= 2
                obj.Property2 = Prop2;
            else
                obj.Property2 = 0;
            end
            
            if nargin == 3
                obj.Property3 = Prop3;
            else
                obj.Property3 = 0;
            end
            
        end
        
        function outputArg = method1(obj)
            %METHOD1 Displays the Property1 value
            %   Just a starting point for methods.
            outputArg = obj.Property1;
        end
        
        function obj = set.Property1(obj, value)
            if isnumeric(value)
                obj.Property1 = value;
            else
                error('Input must be numeric!');
            end
        end
        
        function value = get.Property2(obj)
            value = obj.Property2;
        end
        
        function value = get.Property4(obj)
            value = class(obj.Property1);
        end
    end
    
    methods (Static)
        function name = ShowName()
            name = 'This is MyClass.';
        end
    end
end

