//basit istek-cevap
function chatbot(input){
    let output = "";
    input = input.toLowerCase();
    if(input.includes("merhaba")){
        output="Merhaba, size nasıl yardımcı olabilirim?";
    }
    else if(input.includes("şikayet")){
        output="Şikayetlerinizi belediyemizin şikayet formu üzerinden iletebilirsiniz. Ayrıca, belediyemizin çağrı merkezine de şikayetlerinizi iletebilirsiniz.<br><a href='https://www.google.com.tr/?hl=tr' target='_blank'>CAN</a>";
    }
    else if(input.includes("etkinlik")){
        output="Belediyemizin düzenlediği etkinlikler hakkında bilgi almak için etkinlik takvimimizi inceleyebilir veya sosyal medya hesaplarımızı takip edebilirsiniz.<br><a href='https://www.google.com.tr/?hl=tr' target='_blank'>CAN</a>";
    }
    else if(input.includes("fatura")){
        output="Faturalarınızı belediyemizin veznelerinden, anlaşmalı bankalardan veya online ödeme sistemimiz üzerinden ödeyebilirsiniz.<br><a href='https://www.google.com.tr/?hl=tr' target='_blank'>CAN</a>";
    }
    else if(input.includes("saat")){
        output="Belediye hizmet binamız hafta içi her gün 08:30 - 17:30 saatleri arasında hizmet vermektedir. Hafta sonu ve resmi tatillerde kapalıdır.<br><a href='https://www.google.com.tr/?hl=tr' target='_blank'>CAN</a>";
    }
    else{
        output="Üzügünüm anlamadım. Lütfen tekrar deneyin";
    }
    return output;
}
/*message user bot avatar text*/
//kullanıcı mesajını sohbette görüntüleme
function displayUserMessage(message){
    let chat=document.getElementById("chat");
    let userMessage = document.createElement("div");
    userMessage.classList.add("message");
    userMessage.classList.add("user");
    let userAvatar = document.createElement("div");
    userAvatar.classList.add("avatar");
    let userText = document.createElement("div");
    userText.classList.add("text");
    userText.innerHTML = message;
    userMessage.appendChild(userAvatar);
    userMessage.appendChild(userText);
    chat.appendChild(userMessage);
    chat.scrollTop = chat.scrollHeight;
}

//bot mesajını sohbette görüntüleme
function displayBotMessage(message){
    let chat = document.getElementById("chat");
    let botMessage = document.createElement("div");
    botMessage.classList.add("message");
    botMessage.classList.add("bot");
    let botAvatar = document.createElement("div");
    botAvatar.classList.add("avatar");
    let botText = document.createElement("div");
    botText.classList.add("text");
    botText.innerHTML = message;
    botMessage.appendChild(botAvatar);
    botMessage.appendChild(botText);
    chat.appendChild(botMessage);
    chat.scrollTop = chat.scrollHeight;
}


function firstMessage(){
    let chat = document.getElementById("chat");
    let botMessage = document.createElement("div");
    botMessage.classList.add("message");
    botMessage.classList.add("bot");
    let botAvatar = document.createElement("div");
    botAvatar.classList.add("avatar");
    let botText = document.createElement("div");
    botText.classList.add("text");
    botText.innerHTML = "Merhaba, size nasıl yardımcı olabilirim?";
    botMessage.appendChild(botAvatar);
    botMessage.appendChild(botText);
    chat.appendChild(botMessage);
    chat.scrollTop = chat.scrollHeight;
}

//kullanıcı mesajı gönder ve bot yanıtı al
function sendMessage(){
    let input = document.getElementById("input").value;
    if(input){
        displayUserMessage(input);
        let output = chatbot(input);
        setTimeout(function(){
            displayBotMessage(output);
        },1000);
        document.getElementById("input").value="";
    }
}

//gönder tuşu tıklama olay dinleyicisi
document.getElementById("button").addEventListener("click",sendMessage);

//enter tuşu ile kullanıcı mesajı göndermek için
document.getElementById("input").addEventListener("keypress",function(event){
    if(event.keyCode==13){
        sendMessage();
    }
});

const chatbotToggler = document.querySelector(".chatbot-toggler");
chatbotToggler.addEventListener("click", () => document.body.classList.toggle("show-chatbot"));
chatbotToggler.addEventListener("click", firstMessage());