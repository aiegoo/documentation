from kivy.app import App
from kivy.uix.button import Button

class demoAndroidApp(App):
    def build(self):
        return Button(text='Python On Android Device')

if __name__ in ('__main__', '__android__'):
   demoAndroidApp().run()

