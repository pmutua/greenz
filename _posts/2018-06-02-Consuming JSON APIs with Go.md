---
layout: post
title: Consuming JSON APIs with Go

description: >
  We live in a time where there is an API for almost anything.

tags: [blog]
author: author1

---

To authenticate with the numverify API, simply attach your access_key to the base endpoint URL:

`http://apilayer.net/api/validate?access_key=YOUR_ACCESS_KEY`

In addition to the “access_key” parameter, there is only one required parameter (“number”) to start validating phone numbers.

Type the following in your browser window:

`http://apilayer.net/api/validate?access_key=YOUR_ACCESS_KEY&number=41443607070`

The API response is returned in JSON format.

Show format here

numverify.go

JSON-to-Go is an excellent tool that instantly converts JSON into a Go type definition. Using it, I get:

```GO

  type Numverify struct {
  	Valid               bool   `json:"valid"`
  	Number              string `json:"number"`
  	LocalFormat         string `json:"local_format"`
  	InternationalFormat string `json:"international_format"`
  	CountryPrefix       string `json:"country_prefix"`
  	CountryCode         string `json:"country_code"`
  	CountryName         string `json:"country_name"`
  	Location            string `json:"location"`
  	Carrier             string `json:"carrier"`
  	LineType            string `json:"line_type"`
  }

```

Our Go program “numverify.go” is a bare bones program showing you how to access the “numverify” API. Later on you could convert this to a web app and host it on Google App Engine or Heroku.

Here’s the complete program:

```GO

package main

import (
	"encoding/json"
	"fmt"
	"log"
	"net/http"
	"net/url"
)

type Numverify struct {
	Valid               bool   `json:"valid"`
	Number              string `json:"number"`
	LocalFormat         string `json:"local_format"`
	InternationalFormat string `json:"international_format"`
	CountryPrefix       string `json:"country_prefix"`
	CountryCode         string `json:"country_code"`
	CountryName         string `json:"country_name"`
	Location            string `json:"location"`
	Carrier             string `json:"carrier"`
	LineType            string `json:"line_type"`
}

func main() {
	phone := "14158586273"
	// QueryEscape escapes the phone string so
	// it can be safely placed inside a URL query
	safePhone := url.QueryEscape(phone)

	url := fmt.Sprintf("http://apilayer.net/api/validate?access_key=YOUR_ACCESS_KEY&number=%s", safePhone)

	// Build the request
	req, err := http.NewRequest("GET", url, nil)
	if err != nil {
		log.Fatal("NewRequest: ", err)
		return
	}

	// For control over HTTP client headers,
	// redirect policy, and other settings,
	// create a Client
	// A Client is an HTTP client
	client := &http.Client{}

	// Send the request via a client
	// Do sends an HTTP request and
	// returns an HTTP response
	resp, err := client.Do(req)
	if err != nil {
		log.Fatal("Do: ", err)
		return
	}

	// Callers should close resp.Body
	// when done reading from it
	// Defer the closing of the body
	defer resp.Body.Close()

	// Fill the record with the data from the JSON
	var record Numverify

	// Use json.Decode for reading streams of JSON data
	if err := json.NewDecoder(resp.Body).Decode(&record); err != nil {
		log.Println(err)
	}

	fmt.Println("Phone No. = ", record.InternationalFormat)
	fmt.Println("Country   = ", record.CountryName)
	fmt.Println("Location  = ", record.Location)
	fmt.Println("Carrier   = ", record.Carrier)
	fmt.Println("LineType  = ", record.LineType)

}

```

`func QueryEscape(s string) string`

“QueryEscape” escapes the string so it can be safely placed inside a URL query.

`fmt.Sprintf`

“Sprintf” formats and returns a string without printing it anywhere.

`func NewRequest(method, urlStr string, body io.Reader) (*Request, error)``

“NewRequest” returns a new “Request” given a method, URL, and an optional body. “NewRequest” returns a “Request” suitable for use with “Client.Do”.

`client := &http.Client{}``

A “Client” is an HTTP client.

`resp, err := client.Do(req)``

“Do” sends an HTTP request and returns an HTTP response. When “err” is nil, “resp” always contains a non-nil “resp.Body”. Callers should close “resp.Body” when done reading from it. Use “Defer” for closing the body. “resp.Body” is of type “io.Reader”.

`defer resp.Body.Close()``

Next, “NewDecoder” returns a new decoder that reads from “io.Reader”. A “Decoder” reads and decodes JSON objects from an input stream.

`func NewDecoder(r io.Reader) *Decoder`

“Decode” reads the next JSON-encoded value from its input and stores it in the value pointed to by v.

`func (dec *Decoder) Decode(v interface{}) error`

Finally, we extract the information from our populated “Numverify” struct variable “record”.
