import android
 
app = android.Android()
name = app.dialogGetInput("Enter Your Information", "Name: ").result
app.dialogDismiss()
app.dialogCreateAlert("Welcome", "Hello %s" % name)
app.dialogSetPositiveButtonText('OK')
app.dialogShow()
