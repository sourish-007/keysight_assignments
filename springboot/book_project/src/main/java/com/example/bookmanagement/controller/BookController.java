package com.example.bookmanagement.controller;
 
import java.util.List;
 
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
 
import com.example.bookmanagement.model.Book;
import com.example.bookmanagement.repository.BookRepository;
 
@RestController
@RequestMapping("/api/books")
public class BookController {
 
    @Autowired
    private BookRepository bookRepository;
 
    // 1️⃣ getAllBooks
    @GetMapping
    public List<Book> getAllBooks() {
        return bookRepository.findAll();
    }
 
    // 2️⃣ getBookById
    @GetMapping("/{id}")
    public ResponseEntity<Book> getBookById(@PathVariable Long id) {
        return bookRepository.findById(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }
 
    // 3️⃣ createBook
    @PostMapping
    public Book createBook(@RequestBody Book book) {
        return bookRepository.save(book);
    }
 
    // 4️⃣ updateBookById
    @PutMapping("/{id}")
    public ResponseEntity<Book> updateBookById(@PathVariable Long id,
                                               @RequestBody Book bookDetails) {
        return bookRepository.findById(id).map(book -> {
            book.setTitle(bookDetails.getTitle());
            book.setDescription(bookDetails.getDescription());
            book.setPublishedYear(bookDetails.getPublishedYear());
            book.setPublished(bookDetails.isPublished());
            return ResponseEntity.ok(bookRepository.save(book));
        }).orElse(ResponseEntity.notFound().build());
    }
 
    
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteBook(@PathVariable Long id) {
        bookRepository.deleteById(id);
        return ResponseEntity.noContent().build();
    }
 
    
    @DeleteMapping
    public ResponseEntity<Void> deleteAllBooks() {
        bookRepository.deleteAll();
        return ResponseEntity.noContent().build();
    }
 
    // 7️⃣ findByPublishedYear
    @GetMapping("/year/{year}")
    public List<Book> findByPublishedYear(@PathVariable int year) {
        return bookRepository.findByPublishedYear(year);
    }
}
 
 