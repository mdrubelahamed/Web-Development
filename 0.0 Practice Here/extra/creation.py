import os

dayno = projno = 31

# ADD FOLDER NAME
name = "4.4 Resume building"
parent_directory = f"E:/Programmer/Web-Devlopment"  # Replace with the actual parent directory path
path_name = os.path.join(parent_directory, name)

os.mkdir(path=path_name)

with open(f"{path_name}/index.html", mode="w") as f1, open(f"{path_name}/README.md", mode="w") as f2:
    f2.write(f"""## Topic
- 


1. Keywords


2. Notes 


3. Summary 

---""")
