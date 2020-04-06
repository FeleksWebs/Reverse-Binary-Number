 
function reversedBinaryInteger(num) {
    const BinNum =Number( num).toString(2);
    const BinArr=[]

    for(var i=0;i<BinNum.length;i++){
      BinArr.push(BinNum[i])
    }

  const BinArrRev=BinArr.reverse().toString("")
  const SplitNr = BinArrRev.split(",")
  const joinNr = SplitNr.join("")
  const BinToNr = joinNr.toString(0)
  const finalNr=parseInt(BinToNr,2)
  document.getElementById("RevBinNr").innerHTML = finalNr;
  //return parseInt(BinToNr,2)
  }
  
  