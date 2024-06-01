// Online Javascript Editor for free
// Write, Edit and Run your Javascript code using JS Online Compiler

 /*
Assessment Requirements
1. Create a variable that can hold a number of NFT's. What type of variable might this be?
2. Create an object inside your mintNFT function that will hold the metadata for your NFTs. 
   The metadata values will be passed to the function as parameters. When the NFT is ready, 
   you will store it in the variable you created in step 1
3. Your listNFTs() function will print all of your NFTs metadata to the console (i.e. console.log("Name: " + someNFT.name))
4. For good measure, getTotalSupply() should return the number of NFT's you have created
*/

// create a variable to hold your NFT's
const NFT =[]

// this function will take in some values as parameters, create an
// NFT object using the parameters passed to it for its metadata, 
// and store it in the variable above.
function mintNFT (_name,_shirtcolour,_height,_age) {
    const NFT={
        "name":_name,
        "shirtcolour":_shirtcolour,
        "height":_height,
        "age":_age
        
    }
    NFTs.push(NFT);
    console.log("Minted:"+_name);
}

// create a "loop" that will go through an "array" of NFT's
// and print their metadata with console.log()
function listNFTs () {
    for (let i=0;i< NFTs.length;i++){
        console.log("\nID:\t\t" + (i+1));
        console.log("\nname:\t\t" + NFT[i].name);
        console.log("\nshirtcolour:\t\t"+ NFT[i].ahirtcolour);
        console.log("\nheight:\t\t" + NFT[i].height);
        console.log("\nage:\t\t" + NFT[i].age);
    }

}

// print the total number of NFTs we have minted to the console
function getTotalSupply() {
    console.log("\n"+NFTs.length);

}

// call your functions below this line
mintNFT("Messi","Blue","170 cm","36");
mintNFT("Ronaldo","Red","180 cm","37");
mintNFT("Mbappe","Black","182 cm","21");
mintNFT("Neymar","Yellow","173 cm","32");
listNFTs();
getTotalSupply();