import android
 
app = android.Android()
message = "Let us count from 1 to 10"
app.ttsSpeak(message)
for i in range(1,11):
    app.ttsSpeak(str(i))
