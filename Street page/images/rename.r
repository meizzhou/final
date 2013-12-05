
setwd("~/Documents/github/baptiste.github.com/images")

require(brew)

tpl <- '<a class="gallery" title="<%= title %>" href="images/<%= path %>/p<%= ii %>.jpg"><img src="images/<%= path %>/p<%= ii %>.jpg" height=400px alt="<%= path %> image <%= ii %>" id="field" /></a>\n'


brew_template <- function(template = tpl, values, file="", ...){
  env <- as.environment(values)
  parent.env(env) <- .GlobalEnv 
  a  <-  textConnection("cout", "w")
  out <- try(brew(text = template, envir=env, output=a))
  
  if(inherits(out, "try-error")){
    close(a)
    stop()
  }
  cat(cout, file=file, sep="\n", ...)
  close(a) 
  invisible(cout)
}

head <- readLines("../head")
tail <- readLines("../tail")
save(head, tail, file="template.rda")

load("template.rda")

rename_files <- function(folder, titles="", file = folder, prefix="p", 
                         rename=TRUE, write=TRUE, sort=TRUE){
  
  ff <- list.files(path=folder, pattern="jpg", full.names=TRUE)
  
  if(sort){
    reg <- paste0(folder, "/([a-z])+([0-9]+)(\\.jpg)")
    ind <- gsub(reg, "\\2", ff, perl=TRUE)
    ff <- ff[order(as.numeric(ind))]
  }
  
  cat(ff, sep="\n")
  n <- length(ff)
  if(length(titles) != n && !rename){
    titles <- rep(titles, length.out=n)
    warning("provide more titles")
  }
  #   stopifnot(n == length(titles))
  if(write){
    file <- paste0("../",file,".html")
    con <- file(file, "w")
    writeLines(head, con)
    close(con)
    cona <- file(file, "a")
    for(ii in seq_len(n)){
      brew_template(values = list(title = titles[ii], ii=ii, path=folder),
                    append=TRUE, file=cona)      
    }
    writeLines(tail, cona)
    close(cona)
  }
    
  if(rename){
    for(ii in seq_len(n)){
      tmp <- paste0(folder, "/tmp", ii,".jpg")
      file.rename(ff[ii], tmp)
    }
    for(ii in seq_len(n)){
      tmp <- paste0(folder, "/tmp", ii,".jpg")
      file.rename(tmp, paste0(folder,"/", prefix, ii,".jpg"))
    }
  }
    
}


abstract <- readLines("../abstract")
rename_files("abstract", abstract)
animals <- readLines("../animals")
rename_files("animals", animals)
nz <- readLines("../nz")
rename_files("nz", nz, rename=TRUE)
uk <- readLines("../uk")
rename_files("uk", uk)
es <- readLines("../es")
rename_files("es", es)
fr <- readLines("../fr")
rename_files("fr", fr)
ca <- readLines("../ca")
rename_files("ca", ca)
ar <- readLines("../ar")
rename_files("ar", ar)
street <- readLines("../street")
rename_files("street", street, file="index")
travels <- readLines("../travels")
rename_files("misc", travels, file="travels")
