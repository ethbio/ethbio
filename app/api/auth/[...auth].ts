import { passportAuth } from 'blitz';
import DiscordStrategy from 'passport-discord';

interface PublicDataIf {
    username: string,
    email: string,
    source: string
}

interface PrivateDataIf {
    accessToken: string,
    refreshToken: string
}
// @discord
// scopes in order to identify the user provided by the callback
let scopes: Array<string> = ['identify', 'email', 'guilds', 'guilds.join'];

export default passportAuth({
    successRedirectUrl: "/dashboard",
    errorRedirectUrl: "/404",
    strategies: [
      {
        strategy: new DiscordStrategy(
            {
                clientID: process.env.DISCORD_CLIENT_ID,
                clientSecret: process.env.DISCORD_CLIENT_SECRET,
                callbackURL: process.env.DISCORD_CALLBACK_URL,
                scope: scopes
            },
            async function (accessToken, refreshToken, profile, done) {
                let publicData: PublicDataIf = {
                    username: profile.username,
                    email: profile.email,
                    source: "discord",
                }
                let privateData: PrivateDataIf = {
                    accessToken: accessToken,
                    refreshToken: refreshToken
                    
                }
                //@ts-ignore
                done(undefined, { publicData, privateData: privateData })
            }
        )
      },
    ],
  })