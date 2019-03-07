export default function() {
  return [
    {
      title: "Account Dashboard",
      to: "/account-overview",
      htmlBefore: '<i class="material-icons">dashboard</i>',
      htmlAfter: ""
    },
    {
      title: "Invest",
      htmlBefore: '<i class="material-icons">attach_money</i>',
      to: "/invest",
    },
    {
      title: "Link Bank Account",
      htmlBefore: '<i class="material-icons">account_balance</i>',
      to: "/#",
    }
  ];
}
