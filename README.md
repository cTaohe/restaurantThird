# 我的餐廳清單

我的餐廳清單，除了可以新增、編輯、刪除，增加帳號登入功能，可由本地端直接註冊帳號，亦可藉由OAuth2.0可以使用facebook、google第三方登入。

## 新增安裝環境
- passport
- passport-google-oauth20
- passport-facebook
- passport-local
- connect-flash
- bcryptjs
- dotenv
- express-session

## 下載及安裝

### 安裝

安裝 [MongoDB](https://www.mongodb.com/download-center/community)

安裝專案
```
nvm install 10.15.3
git clone https://github.com/cTaohe/restaurantThird.git
cd restaurantThird
npm install
```

在 restaurantThird/models/seeds/ 產生種子檔案

```
cd restaurantThird/models/seeds
node restaurantSeeder.js
```
### 在專案底下新增 .nev 檔案
為了隱藏敏感資訊，使用 `dotenv` 新增`.nev`檔案另外一個儲存 `client ID` 以及 `client secret`

在 [Facebook developers](https://developers.facebook.com/) 、 [Google developers console](https://console.developers.google.com/apis/) 創建應用程式取得 `client ID` 以及 `client secret` 並且記得設定網域 `localhost:3000/auth/認證網站/callback`

`.nev smaple`
```
FACEBOOK_ID= //your Client ID
FACEBOOK_SECRET= //your Client secret
FACEBOOK_CALLBACK=http://localhost:3000/auth/facebook/callback
GOOGLE_ID= //your Client ID
GOOGLE_SECRET= //your Client secret
GOOGLE_CALLBACK=http://localhost:3000/auth/google/callback
```
### 執行

在 restaurantThird 資料夾下
```
npm run dev
```
在 Browser 網址輸入 `localhost:3000` ，就可以在瀏覽器觀看。

## 功能

- 帳號註冊
- 帳號登入
- 第三方登入

## 畫面
登入
![image](https://lh3.googleusercontent.com/ElOoOtKltZ0kgzUia4Q-_QFvos4CuBRBlQjd5Os5Vp_WwPa4FAKh3iM-mU0fyvAIiUQwfY323j9--cAgfG-oxRUbu6qkbCYRuO-DR-4DpSjC0m6p4_sdTpqGoCu3YQJmAdB6mF0CRlV7qyrHIklOQ8MP7lR8LwDgy1mOnw00k_DqVBT1tWWzw62tv-C8U18-E0tyxS0ilNLJ8F6Gy-RPzisl049DZ2DUz-MMQ8z-gW8Pl57z-YNcSAYeprm0jYKGANJpkJ-akNXAwuwb-YPY6DUd8bNO0v3AurJq0I6CXevuFd1jnG9XoSfjoWY1JcxNYDYXMHxrKoDk4Y4EUDAPUkZnJEnWhqfRkfOYr_u4rA2enoDQdoFzZUyTf4yUqkgSvqPGE8X11Wx4gzT1PCTL0XEFGL5MM_UWz4RhQErgV1lEQGai-8jZ7OOH2vPBXxnsQaHUBAf5OZJX8b13ACeTgcSyorcg-zoj9LKMyLvtR47DpUadiF1IATcbEopVYznYbP9kDV7euWkpjCA7iVWu6CAaqqFELrUcPwgcDdhJ0xOUHgUwdR_TrCAyq84H3pp87nRjZ6eHa7Dh9tZ_-Cip73DD-hn9nICjNM-Mo7xZkSPz3s8ysuA3-kMc0Tw2YpUs4NxYB53JQJ-s87FkKOYpEQgCwAiYGgiEwXsX2uGvqzWymAQOEQBJrlGsQRpAcvC8_r1r_vFD1ESLUI7WoyNWLjic=w750-h953-no)

註冊
![image](https://lh3.googleusercontent.com/VcKlqjN_obMdkskk2jj0t08ZdcuZ0WjlpT6TkJa0yFG0PKII4iZ5iO9dNRYGmv_NwgRTQH_ARAB8uTaDjbVxZAWJdoIqm9V4lSMhiQGAip3LEMJQ7dUkrBczPLLSVBs6rp8m_wPoqApXQHK3GV7ia8rY98Sg3lzD5b568R1gxo_4Pn8JjUPGS9-D8bjWxYc1N8GECu-r9-MX-amgBX4ry36-alr6W0--c-LlswbXJIfJHnTK0Dqqn83qwpRjcQf47ZLBSvFOLqpEaHJDXdAQAGcGPG5rHwA9eAQwOFe2ZoeS7LEUbw9Bwz02frdgHtproFHyARejJ-HpTXn-2H4LTEsKxSLp1Z9SmVpXbocTiWhKh62-LNPmXD7eveNJ8WEf8BGkfwxBoZTF_brfP-v0mf7rJCy-eaexjw4xCfBaMNQOPji4tZKjP_EZiTvhYsLIlGLIcEUsqT5lc1OXBNNK6-cBglKejkT1AwweP7Lj6NCLb9txMrXlVXovW_9OlwIlwhEYELOVnUBD4BJwdhSWZN_q5WjUmg82B4SHv_7e3ScBJLX-3yCTMSBHcxbC5vQr7JNnAI5txcMmOTRFdnT8D05g58xnUXasxui88XQpdizMUAN-OfgC3JbOVm876ESCjhl4UjS8rJyumuuLa2sGd9QO_UrrFIy2bxddTqFgOLfmH4mo1Xp6gPUVpD4p3TzNhLxRiJrrw5t_njwps1AXpm11=w727-h947-no)

登出
![image](https://lh3.googleusercontent.com/DBB_Wai8KczB2JdoSjJIeq17BwGsk57jR62zogpyeeA3RiUhYbfujkldQLk8WwPi4F7n7KrAxvCIVz7DYVGKfVUJCODf7DzJE18s7VQ0ao3rKg5w8rmqL17MN2LIFvMOyYn-JZnhXLaXg3Y_m8LWZq_84J4JqxqbUCno-O3RX8QNSevq4JUu--FODaSPji5M_Kebr7xi4kpAemdZuAS6bzNPz1ix_-LVhBcXsxF9Lz5zZTj-i4XgYbwVSJd8EnyE-jN7JH1_HZ0_m9YmSFJeCMnNf9IvgC8opD0OLqsncvHHIffpG2-QCwnAErG8pPVGcBbP6TYH89FoygEXEqL3UJFDT9VRetmTpaG2uQyWqjSsQTNTvh4mGZixGc-6_Fi5htr9mu5HnyP7hdGECXDWvORJY4oLsqx7RgkpqQyi0BB2VmnW-AXvNM4EAPo15qDAfuDQsbzTZtnhKtu_kNUsUxPpYsVWS69oo8AnWBTsX3vBtmuvbR3dQuk0GM6Dc2vY4sdrX0qTLzuN5aqy6aSNjz5TOw114cTDAvvu036_2JGKoj6tgfUESDX8uTA11VciDqTTt9Z_SpdRrxOyvsXOmVMCyY_wK6_GVO9fw5gR6CX93NovbuRqIKtW-PJYcVb-GiBtqX_TrKt_lP2eHHwt6xJADV78JFp4MBQok3J2BO_KCtw8lM33-ojzdUzl9uzGlT0nq79ddqvf32It9zjJL6YA=w727-h951-no)

