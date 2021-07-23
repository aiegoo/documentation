# -*- coding: utf-8 -*-

# Form implementation generated from reading ui file 'demoMDI.ui'
#
# Created by: PyQt5 UI code generator 5.6
#
# WARNING! All changes made in this file will be lost!

from PyQt5 import QtCore, QtGui, QtWidgets

class Ui_MainWindow(object):
    def setupUi(self, MainWindow):
        MainWindow.setObjectName("MainWindow")
        MainWindow.resize(626, 471)
        self.centralwidget = QtWidgets.QWidget(MainWindow)
        self.centralwidget.setObjectName("centralwidget")
        self.mdiArea = QtWidgets.QMdiArea(self.centralwidget)
        self.mdiArea.setGeometry(QtCore.QRect(0, 0, 598, 431))
        self.mdiArea.setViewMode(QtWidgets.QMdiArea.SubWindowView)
        self.mdiArea.setObjectName("mdiArea")
        self.subwindow = QtWidgets.QWidget()
        self.subwindow.setObjectName("subwindow")
        self.label = QtWidgets.QLabel(self.subwindow)
        self.label.setGeometry(QtCore.QRect(60, 20, 311, 20))
        self.label.setObjectName("label")
        self.subwindow_2 = QtWidgets.QWidget()
        self.subwindow_2.setObjectName("subwindow_2")
        self.label_2 = QtWidgets.QLabel(self.subwindow_2)
        self.label_2.setGeometry(QtCore.QRect(40, 30, 151, 16))
        self.label_2.setObjectName("label_2")
        MainWindow.setCentralWidget(self.centralwidget)
        self.menubar = QtWidgets.QMenuBar(MainWindow)
        self.menubar.setGeometry(QtCore.QRect(0, 0, 626, 21))
        self.menubar.setObjectName("menubar")
        self.menuWindows = QtWidgets.QMenu(self.menubar)
        self.menuWindows.setObjectName("menuWindows")
        MainWindow.setMenuBar(self.menubar)
        self.statusbar = QtWidgets.QStatusBar(MainWindow)
        self.statusbar.setObjectName("statusbar")
        MainWindow.setStatusBar(self.statusbar)
        self.actionSubWindow_View = QtWidgets.QAction(MainWindow)
        self.actionSubWindow_View.setObjectName("actionSubWindow_View")
        self.actionTabbed_View = QtWidgets.QAction(MainWindow)
        self.actionTabbed_View.setObjectName("actionTabbed_View")
        self.actionCascade_View = QtWidgets.QAction(MainWindow)
        self.actionCascade_View.setObjectName("actionCascade_View")
        self.actionTile_View = QtWidgets.QAction(MainWindow)
        self.actionTile_View.setObjectName("actionTile_View")
        self.menuWindows.addAction(self.actionSubWindow_View)
        self.menuWindows.addAction(self.actionTabbed_View)
        self.menuWindows.addAction(self.actionCascade_View)
        self.menuWindows.addAction(self.actionTile_View)
        self.menubar.addAction(self.menuWindows.menuAction())

        self.retranslateUi(MainWindow)
        QtCore.QMetaObject.connectSlotsByName(MainWindow)

    def retranslateUi(self, MainWindow):
        _translate = QtCore.QCoreApplication.translate
        MainWindow.setWindowTitle(_translate("MainWindow", "MainWindow"))
        self.subwindow.setWindowTitle(_translate("MainWindow", "Subwindow"))
        self.label.setText(_translate("MainWindow", "First sub window"))
        self.subwindow_2.setWindowTitle(_translate("MainWindow", "Subwindow"))
        self.label_2.setText(_translate("MainWindow", "Second sub window"))
        self.menuWindows.setTitle(_translate("MainWindow", "Windows"))
        self.actionSubWindow_View.setText(_translate("MainWindow", "SubWindow View"))
        self.actionTabbed_View.setText(_translate("MainWindow", "Tabbed View"))
        self.actionCascade_View.setText(_translate("MainWindow", "Cascade View"))
        self.actionTile_View.setText(_translate("MainWindow", "Tile View"))


if __name__ == "__main__":
    import sys
    app = QtWidgets.QApplication(sys.argv)
    MainWindow = QtWidgets.QMainWindow()
    ui = Ui_MainWindow()
    ui.setupUi(MainWindow)
    MainWindow.show()
    sys.exit(app.exec_())

