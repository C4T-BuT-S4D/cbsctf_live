const regApiURL = 'https://reg-api.cbsctf.live';
// const regApiURL = "http://127.0.0.1:8000";

const userMenu = `Hi! Welcome to CBSCTF registration console! Available commands:

<b>auth</b>                   authenticate with telegram
<b>solo</b>                   register as solo player
<b>register &lt;team_name&gt;</b>   register a team
<b>show_reg</b>               show your registration
<b>join &lt;token&gt;</b>           join team
<b>leave</b>                  leave the team (if the captain leaves, team is deleted)
<b>get_password</b>           get archive password
<b>reboot</b>                 to reboot your machine`;

const adminMenu = `Secret admin menu:

<b>get_status</b>                get status
<b>set_status &lt;status&gt;</b>       set status
<b>list_reg</b>                  list registrations
<b>del_reg &lt;user_id&gt;</b>         delete registration
<b>yml</b>                       get teams dump for ForcAD
<b>upload_config</b>             upload configs
<b>upload_tokens</b>             upload tokens
<b>set_password &lt;password&gt;</b>   share configs password
<b>stop_self_hosted</b>          to stop self-hosted machines
<b>pm &lt;id&gt;</b>                   to pm team`;

export { regApiURL, userMenu, adminMenu };
