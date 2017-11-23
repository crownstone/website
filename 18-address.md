---
layout: page
title: Address
header: Address
group: Landing
markdown: true
permalink: address/
---
{% include JB/setup %}

# Address


<div class="container">
    <div class="row">
	<br/>
	<div class="col-xs-6 col-sm-6 col-md-6">
	    <p>
	    Crownstone
	    <br>
	    {{ site.company.street }}
	    <br>
	    {{ site.company.postal_code }}
	    <br>
	    KvK: {{ site.company.kvk }}
	    <br>
	    BTW/VAT: {{ site.company.vat }}
	    <br>
	    <i class='el el-envelope'></i> 
	    email: 
	    <script type="text/javascript">/*<![CDATA[*/var a=new Array("{{ site.contact-team.email[0] }}", "{{ site.contact-team.email[1] }}", "{{ site.contact-team.email[2] }}", "{{ site.contact-team.email[3] }}", "{{ site.contact-team.email[4] }}", "{{ site.contact-team.email[5] }}");document.write("<a href='mailto:");for(i=a.length-1;i>=0;i--){document.write(a[i])};document.write("?subject=Crownstone Team'>");for(i=a.length-1;i>=0;i--){document.write(a[i])};document.write("</a>");/*]]>*/</script>
	    <noscript>team@...</noscript>
	    <br>
	    <i class='el el-phone'></i> 
	    phone: 
	    <a href="tel:{{ site.company.phone_international }}">{{ site.company.phone_international }}</a> / {{ site.company.phone_local }}
	    </p>
	    <br>
	    <br>
	    <p>
	    Important. When sending parcels to our address make sure you use the complete street number: {{ site.company.street_number }}
	    </p>
	</div>
    </div>
</div>

