---
layout: page
title: Address
header: Address
group: Landing
markdown: true
permalink: address/
---
{% include JB/setup %}

# Physical address

The address of Crownstone HQ:

**Crownstone**
<br>
{{ site.company.street }}
<br>
{{ site.company.postal_code }}
<br>
KvK: {{ site.company.kvk }}
<br>
BTW/VAT: {{ site.company.vat }}

Important. When sending parcels to our address make sure you use the complete street number: {{ site.company.street_number }}

# Contact

<div class="email"><i class='el el-envelope'></i>email: team@</div>

<i class='el el-phone'></i> 
phone: 
<a href="tel:{{ site.company.phone_international }}">{{ site.company.phone_international }}</a> / {{ site.company.phone_local }}
	    
<script type="text/javascript">
  function addEmailAddress() {
    var a = new Array("{{ site.contact-team.email[0] }}", "{{ site.contact-team.email[1] }}", "{{ site.contact-team.email[2] }}", "{{ site.contact-team.email[3] }}", "{{ site.contact-team.email[4] }}", "{{ site.contact-team.email[5] }}");
    var address = "";
    for (var i = a.length - 1; i >=0; i--) {
      address += a[i];
    }
    var list = document.getElementsByClassName("email");
    for (var i = 0; i < list.length; i++) {
      list[i].innerHTML = "<p><i class='el el-envelope'></i> email: <a href='mailto:" + address + "'>" + address + "</a></p>";
    }
  }
  addEmailAddress();
</script>
