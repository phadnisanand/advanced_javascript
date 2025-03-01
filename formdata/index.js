document.getElementById("app").innerHTML = `
<h1>File Upload & FormData Example</h1>
<div>
<input type="file" id="fileInput" />
</div>
`;

const fileInput = document.querySelector("#fileInput");

const uploadFile = async file => {
  console.log("Uploading file...");
  const API_ENDPOINT = "http://localhost:3000/upload";
  const formData = new FormData();
  formData.append("file", file);
  /*request.open("POST", API_ENDPOINT, true);
  request.onreadystatechange = () => {
    if (request.readyState === 4 && request.status === 200) {
      console.log(request.responseText);
    }
  };
  formData.append("file", file);
  request.send(formData);*/

  await fetch(API_ENDPOINT, {
      method: 'POST',
      body: formData
    })
    .then(response => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error('File upload failed');
      }
    })
    .then(data => {
      console.log('Server response:', data);
    })
    .catch(error => {
      console.error('Error uploading file:', error);
    });
	
};

fileInput.addEventListener("change", event => {
  const files = event.target.files;
  uploadFile(files[0]);
});
