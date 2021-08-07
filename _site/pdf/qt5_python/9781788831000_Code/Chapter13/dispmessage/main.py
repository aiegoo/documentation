from kivy.app import App
from kivy.uix.button import Button
from kivy.uix.label import Label
from kivy.uix.boxlayout import BoxLayout

class WelcomeApp(App):
    def build(self):
        layout = BoxLayout(orientation='horizontal')
        pushButton =  Button(text='Click Me')        
        pushButton.bind(on_press=self.showMessage)
        self.labelMessage = Label(text="")
        layout.add_widget(pushButton)
        layout.add_widget(self.labelMessage)
        return layout
    
    def showMessage(self, event):
        self.labelMessage.text = "Python is compatible to Smartphones"
        
WelcomeApp().run()
