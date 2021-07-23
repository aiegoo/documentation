import android

app = android.Android()
title = 'Understanding Dialog Buttons'
message = ('Do you want to Place the Order?')
app.dialogCreateAlert(title, message)
app.dialogSetPositiveButtonText('Yes')
app.dialogSetNegativeButtonText('No')
app.dialogSetNeutralButtonText('Cancel')
app.dialogShow()
response = app.dialogGetResponse().result
print(response)
app.dialogDismiss()
result=response["which"]
if result=="positive":
    print ("You have selected Yes button")
elif result=="negative":
    print ("You have selected No button")
elif result=="neutral": 
   print ("You have selected Cancel button")
else:
   print ("Invalid response",response)
