import sys
import threading
import time

from PyQt5.QtWidgets import QDialog, QApplication

from demoTwoProgressBars import *

class MyForm(QDialog):
    def __init__(self):
        super().__init__()
        self.ui = Ui_Dialog()
        self.ui.setupUi(self)
        self.show()
       
class myThread (threading.Thread):
   counter=0
   def __init__(self, w, ProgressBar):
      threading.Thread.__init__(self)
      self.w=w
      self.counter=0
      self.progreassBar=ProgressBar
      
   def run(self):
      print ("Starting " + self.name+"\n")
      while self.counter <=100:
          time.sleep(1)
          self.progreassBar.setValue(self.counter)
          self.counter+=10
      print ("Exiting " + self.name+"\n")

      
if __name__=="__main__":    
    app = QApplication(sys.argv)
    w = MyForm()
    thread1 = myThread(w, w.ui.progressBarFileDownload)
    thread2 = myThread(w, w.ui.progressBarVirusScan)
    thread1.start()
    thread2.start()
    w.exec()
    thread1.join()
    thread2.join()
    sys.exit(app.exec_())


