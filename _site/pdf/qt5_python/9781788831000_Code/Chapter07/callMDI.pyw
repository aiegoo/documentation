import sys

from PyQt5.QtWidgets import QMainWindow, QApplication, QAction, QFileDialog

from demoMDI import *

class MyForm(QMainWindow):
    def __init__(self):
        super().__init__()
        self.ui = Ui_MainWindow()
        self.ui.setupUi(self)
        self.ui.mdiArea.addSubWindow(self.ui.subwindow)
        self.ui.mdiArea.addSubWindow(self.ui.subwindow_2)       
        self.ui.actionSubWindow_View.triggered.connect(self.SubWindow_View)
        self.ui.actionTabbed_View.triggered.connect(self.Tabbed_View)
        self.ui.actionCascade_View.triggered.connect(self.cascadeArrange)
        self.ui.actionTile_View.triggered.connect(self.tileArrange)
        self.show()

    def SubWindow_View(self):
        #self.ui.mdiArea.activateNextSubWindow()
        self.ui.mdiArea.setViewMode(0)

    def Tabbed_View(self):
        self.ui.mdiArea.setViewMode(1)

    def cascadeArrange(self):
        self.ui.mdiArea.cascadeSubWindows()

    def tileArrange(self):
        self.ui.mdiArea.tileSubWindows()

if __name__=="__main__":    
    app = QApplication(sys.argv)
    w = MyForm()
    w.show()
    sys.exit(app.exec_())

