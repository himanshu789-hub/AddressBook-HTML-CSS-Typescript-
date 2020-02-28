interface IPerson {
    fullName: string;
}

class Person {
    fullName: string;
}

interface IMobileNumber {
    ContactNumber: string;
    group: string;
}

class MobileNumber {
    ContactNumber: string;
    group: string;

}

class ContactDetail {
    Id: number;
    EmailId: string;
    Person: Person;
    MobileNumbers: Array<IMobileNumber>;
    LandLine: string;
    Website: string;
    Address: string;
}

var AddressBook = {
    ContactToUpdate: ContactDetail,
       
    AddEventListenerOnLoad: function () {
        document.getElementById("add-button").addEventListener("click", AddressBook.Insert);
        document.getElementById("edit-button").addEventListener("click", AddressBook.Update);
        document.getElementById("cancel-button").addEventListener("click", AddressBook.Cancel);
        document.getElementById("commit-button").addEventListener("click", AddressBook.Commit);
        document.getElementById("delete-button").addEventListener("click", AddressBook.Delete);
        AddressBook.EditSection.style.display = "none";
        AddressBook.UpdateSection.style.display = "none";
        AddressBook.Initialize();
    },
    RemoveEventListener: function () {
        var name = (<HTMLInputElement>document.getElementById("name"));
        var emailId = (<HTMLInputElement>document.getElementById("emailId"));
        //AddressBook.UpdateSection.style.display = "none";
        //AddressBook.AddButton.style.display = "block";
        var mobile = (<HTMLInputElement>document.getElementById("mobile")); //make it extensionable
        var landline = (<HTMLInputElement>document.getElementById("landline"));
        var website = (<HTMLInputElement>document.getElementById("website"));
        name.removeEventListener("input", AnnonymsOnInputNameListener);
        emailId.removeEventListener('input', AnnonymsOnInputEmailListener);
        mobile.removeEventListener('input', AnnonymsOnInputMobileListener);
        landline.removeEventListener('input', AnnonymsOnInputLandLineListener);
        website.removeEventListener('input',AnnonymsOnInputWebsiteListener);
    },
    Insert: function ()
    {
            AddressBook.UpdateSection.style.display = "none";
            AddressBook.AddButton.style.display = "block";

        if (!AddressBook.IsValid())
            return;
        AddressBook.RemoveEventListener();
        var name = (<HTMLInputElement>document.getElementById('name')).value;
        if (AddressBook.IsExists(name.toString(), -1))
                return;

            var emailId = (<HTMLInputElement>document.getElementById("emailId")).value;
            var mobile = (<HTMLInputElement>document.getElementById("mobile")).value; //make it extensionable
            var landline = (<HTMLInputElement>document.getElementById("landline")).value;
            var website = (<HTMLInputElement>document.getElementById("website")).value;
            var address = (<HTMLInputElement>document.getElementById("address")).value;

            var contact = new ContactDetail();

            contact.Address = address;
            contact.Person = new Person();
            contact.Person.fullName = name;
            contact.LandLine = landline;
            contact.Website = website;
            contact.EmailId = emailId;
            var detail = new MobileNumber();
            detail.ContactNumber = mobile;
            contact.MobileNumbers = new Array<MobileNumber>();
            contact.MobileNumbers.push(detail);
            contact.Id = AddressBook.ContactDetails.length + 1;
            AddressBook.ContactDetails.push(contact);

        AddressBook.AddListNode(contact);

        },

    AddListNode: function (contactD: ContactDetail) {
            var listnode = document.createElement("li");
            var data_attri = document.createAttribute("id");
            data_attri.value = Number(contactD.Id) + "";
            listnode.setAttributeNode(data_attri);
            var tabIndexAttri = document.createAttribute("tabindex");
            tabIndexAttri.value = "0";
            listnode.setAttributeNode(tabIndexAttri);
            var name = document.createElement("span");
            var contact = document.createElement("span");
            var email = document.createElement("span");

            listnode.addEventListener("click", AddressBook.GetContact);
            name.textContent = contactD.Person.fullName;
            //for (var i = 0; i < contactD.mobileNumbers.length; i++)
            //{
            //    var number = document.createElement("li");
            //    number.textContent = contactD.mobileNumbers[i].number+"";
            //    info.appendChild(number);
            //}
            //listnode.append(Name);
            contact.textContent = contactD.EmailId;
            email.textContent = contactD.MobileNumbers[0].ContactNumber + "";
            listnode.appendChild(name);
            listnode.appendChild(contact);
            listnode.appendChild(email);
            document.getElementById("contacts").append(listnode);
 AddressBook.ContactToUpdate.prototype.Id = contactD.Id;
 AddressBook.ContactToUpdate.prototype.Address = contactD.Address;
 AddressBook.ContactToUpdate.prototype.EmailId = contactD.EmailId;
 AddressBook.ContactToUpdate.prototype.MobileNumbers[0] = (contactD.MobileNumbers[0]);
 AddressBook.ContactToUpdate.prototype.Person = contactD.Person;
 AddressBook.ContactToUpdate.prototype.Website=contactD.Website;
 AddressBook.ShowContact();
        },

    GetContact: function () {
        var gotContact = AddressBook.ContactDetails[Number(this.id) - 1];
            AddressBook.ContactToUpdate.prototype.Id = Number(this.id);
            AddressBook.ContactToUpdate.prototype.Address = gotContact.Address;
            AddressBook.ContactToUpdate.prototype.EmailId = gotContact.EmailId;
            AddressBook.ContactToUpdate.prototype.LandLine = gotContact.LandLine;
            AddressBook.ContactToUpdate.prototype.MobileNumbers = new Array<IMobileNumber>();
            AddressBook.ContactToUpdate.prototype.MobileNumbers.push(gotContact.MobileNumbers[0]);
            AddressBook.ContactToUpdate.prototype.Person = new Person();
            AddressBook.ContactToUpdate.prototype.Person.fullName = gotContact.Person.fullName;
            AddressBook.ContactToUpdate.prototype.Website = gotContact.Website;
        AddressBook.ShowContact();
        AddressBook.EditSection.style.display = "block";
        },

    ShowContact: function () {
    
            AddressBook.DisplaySectionToggleOn();
            var name = <HTMLParagraphElement>document.getElementById("displayName");
            var emailId = <HTMLParagraphElement>document.getElementById("displayEmailId");
            var mobile = <HTMLSpanElement>document.getElementById("displayMobile");
            var landline = <HTMLSpanElement>document.getElementById("displayLandline");
            var website = <HTMLParagraphElement>document.getElementById("displayWebsite");
            var address = <HTMLParagraphElement>document.getElementById("displayAddress");
            name.innerHTML = AddressBook.ContactToUpdate.prototype.Person.fullName;
            emailId.innerHTML = "Email : " + AddressBook.ContactToUpdate.prototype.EmailId;
            mobile.innerHTML = "Mobile : " + AddressBook.ContactToUpdate.prototype.MobileNumbers[0].ContactNumber + "";
            landline.innerHTML = "LandLine : " + AddressBook.ContactToUpdate.prototype.LandLine;
            website.innerHTML = "Website : " + AddressBook.ContactToUpdate.prototype.Website;
            address.innerHTML = "<span style = 'float:left;' > Address : </span><span style='float:left;'>&nbsp;&nbsp;&nbsp;</span > <textarea readonly style = 'float:left;resize:none' >" + AddressBook.ContactToUpdate.prototype.Address +
                "</textarea>";
          
        },

    DisplaySectionToggleOn: function () {
            var display_bar = <HTMLElement>document.getElementById("d-bar");
            var add_bar = <HTMLElement>document.getElementById("add-bar");
            (<HTMLDivElement>add_bar.parentNode).style.display = "none";
            AddressBook.AddButton.style.display = "none";
            AddressBook.UpdateSection.style.display = "none";
            display_bar.style.display = "block";
        add_bar.style.display = "none";

        AddressBook.EditSection.style.display = "none";
        },

    IsExists: function (name: string, index: Number) {
            if (index == -1) {
                for (var i = 0; i < AddressBook.ContactDetails.length; i++) {
                    if (AddressBook.ContactDetails[i]!=null && AddressBook.ContactDetails[i].Person.fullName == name) {
                        document.getElementById("IsNameEmpty").innerText = "#Name Already Exists";
                        document.getElementById("IsNameEmpty").style.color = "#ea4415";
                        return true;
                    }
                }
            }
            else {
                for (var i = 0; i < AddressBook.ContactDetails.length; i++) {
                    if (i != index && AddressBook.ContactDetails[i] != null && AddressBook.ContactDetails[i].Person.fullName == name) {
                        document.getElementById("IsNameEmpty").innerText = "#Name Already Exists";
                        document.getElementById("IsNameEmpty").style.color = "#ea4415";
                        return true;
                    }
                }
            }

            return false;
    },

    MsgCorrectInfo: function (element: HTMLInputElement) {

        switch (element.name)
        {
            case 'name':
                if (AddressBook.nameRegEx.test(element.value))
                {
                    document.getElementById("IsNameEmpty").style.color = "green";
                    document.getElementById("IsNameEmpty").innerText = "#Correct";
                }
                else
                {
                    document.getElementById("IsNameEmpty").style.color = "#f2ba0d";
                    document.getElementById("IsNameEmpty").innerText = "#Please Enter Valid Value";
                }
              
                break;
            case 'emailId':
                if (AddressBook.emailIdRegEx.test(element.value))
                {
                    document.getElementById("IsEmailEmpty").style.color = "green";
                    document.getElementById("IsEmailEmpty").innerText = "#Correct";
                }
                else
                {
                    document.getElementById("IsEmailEmpty").style.color = "#f2ba0d";
                    document.getElementById("IsEmailEmpty").innerText = "#Please Enter Valid Value";
                }
                break;
            case 'mobile':
                if (AddressBook.mobileRegEx.test(element.value))
                {
                    document.getElementById("IsMobileEmpty").style.color = "green";
                    document.getElementById("IsMobileEmpty").innerText = "#Correct";
                }
                else
                {
                    document.getElementById("IsMobileEmpty").style.color = "#f2ba0d";
                    document.getElementById("IsMobileEmpty").innerText = "#Please Enter Valid Value";
                }
                break;
            case 'landline':
                if (AddressBook.landlineRegEx.test(element.value))
                {
                    document.getElementById("IsLandLineEmpty").style.color = "green";
                    document.getElementById("IsLandLineEmpty").innerText = "#Correct";
                }
                else
                {
                    document.getElementById("IsLandLineEmpty").style.color = "#f2ba0d";
                    document.getElementById("IsLandLineEmpty").innerText = "#Please Enter Valid Value";
                }
                break;
            case 'website':
                if (AddressBook.websiteRegEx.test(element.value))
                {
                    document.getElementById("IsWebsiteEmpty").style.color = "green";
                    document.getElementById("IsWebsiteEmpty").innerText = "#Correct";
                }
                else
                {
                    document.getElementById("IsWebsiteEmpty").style.color = "#f2ba0d";
                    document.getElementById("IsWebsiteEmpty").innerText = "#Please Enter Valid Value";
                }
                break;
            default: break;
        }


    },
    nameRegEx: new RegExp("^[A-Za-z\ ?]+$"),
     emailIdRegEx : new RegExp("^[a-z]+@[a-z]+.com$"),
     mobileRegEx : new RegExp("^([+]91)[\ ]?[1-9]{1}[0-9]{9}$"),
    landlineRegEx : new RegExp("^[0][\ ]?(\d){2}[\ ]?(\d){6,8}$"),
    websiteRegEx : new RegExp("^(www\.)[a-zA-Z]+(\.)(com)|(in)|(org)$"),

    IsValid: function () {
            var name = (<HTMLInputElement>document.getElementById("name"));
            var emailId = (<HTMLInputElement>document.getElementById("emailId"));
        //AddressBook.UpdateSection.style.display = "none";
        //AddressBook.AddButton.style.display = "block";
            var mobile = (<HTMLInputElement>document.getElementById("mobile")); //make it extensionable
            var landline = (<HTMLInputElement>document.getElementById("landline"));
            var website = (<HTMLInputElement>document.getElementById("website"));
            var address = (<HTMLInputElement>document.getElementById("address"));
             var flag: boolean = true;
        if (name.value == "" || !AddressBook.nameRegEx.test(name.value)) {
                document.getElementById("IsNameEmpty").innerText = "*Valid Name is required";
                document.getElementById("IsNameEmpty").style.color = "red";

            name.addEventListener("input",AnnonymsOnInputNameListener); 
                flag = false;
        }
        if (emailId.value == "" || !AddressBook.emailIdRegEx.test(emailId.value)) {
                document.getElementById("IsEmailEmpty").innerText = "*Valid Email-Id is required";
                document.getElementById("IsEmailEmpty").style.color = "red";
            flag = false;
            emailId.addEventListener("input", AnnonymsOnInputEmailListener); 

        }
        if (website.value == "" || !AddressBook.websiteRegEx.test(website.value)) {
                document.getElementById("IsWebsiteEmpty").innerText = "*Valid Website is required";
            document.getElementById("IsWebsiteEmpty").style.color = "red";
            website.addEventListener("input", AnnonymsOnInputWebsiteListener); 
                flag = false;
            }
        if (landline.value == "" ) {
            document.getElementById("IsLandLineEmpty").innerText = "*Valid LandLine is required";
            document.getElementById("IsLandLineEmpty").style.color = "red";
            landline.addEventListener("input", AnnonymsOnInputLandLineListener); 
            flag = false;
        }
        if (mobile.value == "" || !AddressBook.mobileRegEx.test(mobile.value)) {
                document.getElementById("IsMobileEmpty").innerText = "*Valid Mobile Number is required";
                document.getElementById("IsMobileEmpty").style.color = "red";
                mobile.addEventListener("input", AnnonymsOnInputMobileListener);
                flag = false;
        }
            return flag;
    },

        ContactDetails: new Array<ContactDetail>(),
        EditSection: <HTMLDivElement>document.getElementById("update-bar"),
        UpdateSection: <HTMLDivElement>document.getElementById("commit-cancel-bar"),
        AddButton: <HTMLButtonElement>document.getElementById("add-button"),
        
    Update: function () {

        AddressBook.FormSectionToggleOn();
        AddressBook.UpdateSection.style.display = "block";
            AddressBook.AddButton.style.display = "none";
            AddressBook.ClearForm();

            var name = (<HTMLInputElement>document.getElementById("name"));
            var emailId = (<HTMLInputElement>document.getElementById("emailId"));
            var mobile = (<HTMLInputElement>document.getElementById("mobile")); //make it extensionable
            var landline = (<HTMLInputElement>document.getElementById("landline"));
            var website = (<HTMLInputElement>document.getElementById("website"));
            var address = (<HTMLInputElement>document.getElementById("address"));

            emailId.value = AddressBook.ContactToUpdate.prototype.EmailId;
        landline.value = AddressBook.ContactToUpdate.prototype.LandLine;
        mobile.value = AddressBook.ContactToUpdate.prototype.MobileNumbers[0].ContactNumber + "";
            name.value = AddressBook.ContactToUpdate.prototype.Person.fullName;
            website.value = AddressBook.ContactToUpdate.prototype.Website;
        address.value = AddressBook.ContactToUpdate.prototype.Address;
      
        },

    FormSectionToggleOn: function () {
            var display_bar = <HTMLElement>document.getElementById("d-bar");
            var add_bar = <HTMLElement>document.getElementById("add-bar");
            (<HTMLDivElement>add_bar.parentNode).style.display = "block";
            AddressBook.ClearForm();
            display_bar.style.display = "none";
            AddressBook.AddButton.style.display = "block";
            add_bar.style.display = "block";
        AddressBook.EditSection.style.display = "none";
        AddressBook.UpdateSection.style.display = "none";
        },

    ClearForm: function () {
            (<HTMLInputElement>document.getElementById('name')).value = "";
            (<HTMLInputElement>document.getElementById("emailId")).value = "";
            (<HTMLInputElement>document.getElementById("mobile")).value = ""; //make it extensionable
            (<HTMLInputElement>document.getElementById("landline")).value = "";
            (<HTMLInputElement>document.getElementById("website")).value = "";
            var address = (<HTMLInputElement>document.getElementById("address")).value = "";
            document.getElementById("IsNameEmpty").innerText = "*";
            document.getElementById("IsEmailEmpty").innerText = "*";
            document.getElementById("IsWebsiteEmpty").innerText = "*";
        document.getElementById("IsLandLineEmpty").innerText = "*";
        document.getElementById("IsMobileEmpty").innerText = "*";

        document.getElementById("IsNameEmpty").style.color = "red";
        document.getElementById("IsEmailEmpty").style.color = "red";
        document.getElementById("IsWebsiteEmpty").style.color = "red";
        document.getElementById("IsLandLineEmpty").style.color = "red";
        document.getElementById("IsMobileEmpty").style.color = "red";


        },

    Initialize: function () {

            AddressBook.EditSection.style.display = "none";
            AddressBook.UpdateSection.style.display = "none";
            AddressBook.FormSectionToggleOn();
            var object1 = new ContactDetail();
            object1.Address = "H.No. 73 Ravigram Tellibandha Colony";
            object1.EmailId = "khemani@gmail.com";
            object1.Id = 1;
            object1.LandLine = "04 452369";

            object1.MobileNumbers = new Array<MobileNumber>();
            var mobile1 = new MobileNumber();
            mobile1.ContactNumber = "+91 73254128233";
            object1.MobileNumbers.push(mobile1);
            object1.Person = new Person();
            object1.Person.fullName = "Himanshu Khemani";
            object1.Website = "www.blog.com";

            var object2 = new ContactDetail();
            object2.Address = "H.No. 73 Ravigram Tellibandha Colony Raipur Chattisgarh";
            object2.EmailId = "khemani@gmail.com";
            object2.Id = 2;
            object2.LandLine = "04 44 444444";

            object2.MobileNumbers = new Array<MobileNumber>();
            var mobile2 = new MobileNumber();
            mobile2.ContactNumber = "+91 999999999";
            object2.MobileNumbers.push(mobile2);
            object2.Person = new Person();
            object2.Person.fullName = "Jimmy Shergill";
            object2.Website = "www.blogSome.com";
            AddressBook.ContactDetails.push(object1);
            AddressBook.ContactDetails.push(object2);
            AddressBook.DisplayAll();
        },
      
    DisplayAll: function ()
       {
        document.getElementById("contacts").innerHTML = "";
        for (var i = 0; i < AddressBook.ContactDetails.length; i++) {
            if (AddressBook.ContactDetails[i] == null)
                continue;
            var listnode = document.createElement("li");
            var tabIndexAttri = document.createAttribute("tabindex");
            tabIndexAttri.value = "0";
            listnode.setAttributeNode(tabIndexAttri);
            var data_attri = document.createAttribute("id");
            data_attri.value = Number(AddressBook.ContactDetails[i].Id) + "";
            listnode.setAttributeNode(data_attri);
            var name = document.createElement("span");
            var email = document.createElement("span");
            var mobile = document.createElement("span");
            listnode.addEventListener("click", AddressBook.GetContact);
            name.textContent = AddressBook.ContactDetails[i].Person.fullName;
            email.textContent = AddressBook.ContactDetails[i].EmailId;
            mobile.textContent = AddressBook.ContactDetails[i].MobileNumbers[0].ContactNumber + "";
            listnode.appendChild(name);
            listnode.appendChild(email);
            listnode.appendChild(mobile);
            document.getElementById("contacts").appendChild(listnode);
}
},
  
    Delete:function()
    {
    AddressBook.ContactDetails[AddressBook.ContactToUpdate.prototype.Id - 1] = null;
     //   AddressBook.ContactToUpdate = null;
        AddressBook.FormSectionToggleOn();
        AddressBook.DisplaySectionEmpty();
        AddressBook.DisplayAll();
    },

    DisplaySectionEmpty: function ()
   {
       var name = <HTMLParagraphElement>document.getElementById("displayName");
       var emailId = <HTMLParagraphElement>document.getElementById("displayEmailId");
       var mobile = <HTMLSpanElement>document.getElementById("displayMobile");
       var landline = <HTMLSpanElement>document.getElementById("displayLandline");
       var website = <HTMLParagraphElement>document.getElementById("displayWebsite");
       var address = <HTMLParagraphElement>document.getElementById("displayAddress");
       name.innerHTML = "";
       emailId.innerHTML = "";
       mobile.innerHTML = "";
       landline.innerHTML = "";
       website.innerHTML = "";
       address.innerHTML = "";
    },

    Cancel: function ()
     {
        AddressBook.DisplaySectionToggleOn();
        AddressBook.DisplayAll();
        AddressBook.ShowContact();
     },

    Commit: function ()
    {
        var name = (<HTMLInputElement>document.getElementById("name"));
        if (AddressBook.IsExists(name.value, AddressBook.ContactToUpdate.prototype.Id - 1))
            return;
        document.getElementById("IsNameEmpty").innerText = "";
        if (!AddressBook.IsValid())
            return;
        AddressBook.RemoveEventListener();
    var emailId = (<HTMLInputElement>document.getElementById("emailId"));
    var mobile = (<HTMLInputElement>document.getElementById("mobile")); //make it extensionable
    var landline = (<HTMLInputElement>document.getElementById("landline"));
    var website = (<HTMLInputElement>document.getElementById("website"));
    var address = (<HTMLInputElement>document.getElementById("address"));

        
        var index = AddressBook.ContactToUpdate.prototype.Id - 1;
        AddressBook.ContactToUpdate.prototype.Id = index + 1;
        AddressBook.ContactDetails[index].Address = AddressBook.ContactToUpdate.prototype.Address = address.value;
        AddressBook.ContactDetails[index].EmailId = AddressBook.ContactToUpdate.prototype.EmailId = emailId.value;
        AddressBook.ContactDetails[index].MobileNumbers.pop();
        var num = new MobileNumber(); num.ContactNumber = mobile.value;
        AddressBook.ContactToUpdate.prototype.MobileNumbers.pop();
        AddressBook.ContactToUpdate.prototype.MobileNumbers.push(num);
        AddressBook.ContactDetails[index].MobileNumbers.push(num);
        AddressBook.ContactDetails[index].Person.fullName = AddressBook.ContactToUpdate.prototype.Person.fullName = name.value;
        AddressBook.ContactDetails[index].Website = AddressBook.ContactToUpdate.prototype.Website = website.value;
        AddressBook.ContactDetails[index].LandLine = AddressBook.ContactToUpdate.prototype.LandLine = landline.value;
        AddressBook.ShowContact();
        AddressBook.DisplayAll();
        AddressBook.ClearForm();

    }

}

AddressBook.AddEventListenerOnLoad();
console.log("yes");
var AnnonymsOnInputNameListener = AddressBook.MsgCorrectInfo.bind(null,document.getElementById('name'));
var AnnonymsOnInputMobileListener = AddressBook.MsgCorrectInfo.bind(null,document.getElementById('mobile'));
var AnnonymsOnInputEmailListener = AddressBook.MsgCorrectInfo.bind(null,document.getElementById('emailId'));
var AnnonymsOnInputWebsiteListener = AddressBook.MsgCorrectInfo.bind(null,document.getElementById('website'));
var AnnonymsOnInputLandLineListener = AddressBook.MsgCorrectInfo.bind(null,document.getElementById('landline'));