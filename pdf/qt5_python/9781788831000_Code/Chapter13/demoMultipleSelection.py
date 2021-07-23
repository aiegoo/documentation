import android
 
app = android.Android()
app.dialogCreateAlert("Select your food items")
app.dialogSetMultiChoiceItems(['Pizza', 'Burger', 'Hot Dog'])
app.dialogSetPositiveButtonText('Done')
app.dialogShow()
app.dialogGetResponse()
response = app.dialogGetSelectedItems()
print(response)
selectedResult=response[1]
n=len(selectedResult)
print("You have selected following food items: ")
for i in range(0, n):
    if selectedResult[i]==0:
        print("Pizza")
    elif selectedResult[i]==1:
        print("Burger")
    elif selectedResult[i]==2: 
        print("Hot Dog")
