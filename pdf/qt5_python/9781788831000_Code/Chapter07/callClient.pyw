import sys

from PyQt5.QtWidgets import QApplication, QDialog

import socket
from threading import Thread 
from socketserver import ThreadingMixIn 

from demoClient import *

tcpClientA=None

class Window(QDialog):
    def __init__(self):
        super().__init__()
        self.ui = Ui_Dialog()
        self.ui.setupUi(self)
        self.textEditMessages=self.ui.textEditMessages
        self.ui.pushButtonSend.clicked.connect(self.dispMessage)
        self.show()


    def dispMessage(self):
        text=self.ui.lineEditMessage.text()
        self.ui.textEditMessages.append("Client: "+self.ui.lineEditMessage.text())
        tcpClientA.send(text.encode())
        self.ui.lineEditMessage.setText("")

class ClientThread(Thread):
    def __init__(self,window): 
        Thread.__init__(self) 
        self.window=window
  
    def run(self): 
       host = socket.gethostname() 
       port = 80
       BUFFER_SIZE = 1024
       global tcpClientA
       tcpClientA = socket.socket(socket.AF_INET, socket.SOCK_STREAM) 
       tcpClientA.connect((host, port))
        
       while True:
           data = tcpClientA.recv(BUFFER_SIZE)
           window.textEditMessages.append("Server: "+data.decode("utf-8"))
       tcpClientA.close() 
            
        
if __name__=="__main__":    
    app = QApplication(sys.argv)
    window = Window()
    clientThread=ClientThread(window)
    clientThread.start()
    window.exec()
    sys.exit(app.exec_())
