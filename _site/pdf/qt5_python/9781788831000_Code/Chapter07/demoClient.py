# -*- coding: utf-8 -*-

# Form implementation generated from reading ui file 'demoClient.ui'
#
# Created by: PyQt5 UI code generator 5.6
#
# WARNING! All changes made in this file will be lost!

from PyQt5 import QtCore, QtGui, QtWidgets

class Ui_Dialog(object):
    def setupUi(self, Dialog):
        Dialog.setObjectName("Dialog")
        Dialog.resize(535, 392)
        self.lineEditMessage = QtWidgets.QLineEdit(Dialog)
        self.lineEditMessage.setGeometry(QtCore.QRect(30, 350, 371, 20))
        font = QtGui.QFont()
        font.setPointSize(12)
        self.lineEditMessage.setFont(font)
        self.lineEditMessage.setObjectName("lineEditMessage")
        self.pushButtonSend = QtWidgets.QPushButton(Dialog)
        self.pushButtonSend.setGeometry(QtCore.QRect(430, 350, 91, 23))
        font = QtGui.QFont()
        font.setPointSize(12)
        self.pushButtonSend.setFont(font)
        self.pushButtonSend.setObjectName("pushButtonSend")
        self.textEditMessages = QtWidgets.QTextEdit(Dialog)
        self.textEditMessages.setGeometry(QtCore.QRect(30, 30, 371, 301))
        font = QtGui.QFont()
        font.setPointSize(12)
        self.textEditMessages.setFont(font)
        self.textEditMessages.setObjectName("textEditMessages")
        self.label = QtWidgets.QLabel(Dialog)
        self.label.setGeometry(QtCore.QRect(180, 10, 47, 13))
        font = QtGui.QFont()
        font.setPointSize(12)
        self.label.setFont(font)
        self.label.setObjectName("label")

        self.retranslateUi(Dialog)
        QtCore.QMetaObject.connectSlotsByName(Dialog)

    def retranslateUi(self, Dialog):
        _translate = QtCore.QCoreApplication.translate
        Dialog.setWindowTitle(_translate("Dialog", "Dialog"))
        self.pushButtonSend.setText(_translate("Dialog", "Send"))
        self.label.setText(_translate("Dialog", "Client"))


if __name__ == "__main__":
    import sys
    app = QtWidgets.QApplication(sys.argv)
    Dialog = QtWidgets.QDialog()
    ui = Ui_Dialog()
    ui.setupUi(Dialog)
    Dialog.show()
    sys.exit(app.exec_())

