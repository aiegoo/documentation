import android
 
app = android.Android()
app.dialogCreateAlert("Select your food item")
app.dialogSetItems(['Pizza', 'Burger', 'Hot Dog'])
app.dialogShow()
response = app.dialogGetResponse().result
selectedResult=response["item"]
if selectedResult==0:
    app.dialogCreateAlert("You have selected Pizza")
elif selectedResult==1:
    app.dialogCreateAlert("You have selected Burger")
elif selectedResult==2: 
    app.dialogCreateAlert("You have selected Hot Dog")
app.dialogSetPositiveButtonText('OK')
app.dialogShow()
