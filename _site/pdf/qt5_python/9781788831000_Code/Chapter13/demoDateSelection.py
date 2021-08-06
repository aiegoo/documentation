import android

app = android.Android()
app.dialogCreateDatePicker(2018,7,10)
app.dialogShow()
response = app.dialogGetResponse().result
app.dialogDismiss()
print ("You have selected following date: ")
print("Day: "+ str(response.get("day")))
print("Month: " + str(response.get("month")))
print("Year: " + str(response.get("year")))
