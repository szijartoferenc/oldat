function szamol()
        {
            var moa=document.getElementById("so").value;
            var mosz=document.getElementById("viz").value;
            var so=parseFloat(moa);
            var viz=parseFloat(mosz);            
            var mm=(so/(so+viz))*100;
            document.getElementById("megoldas").innerHTML=mm;
        }