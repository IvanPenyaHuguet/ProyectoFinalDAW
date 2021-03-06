package com.proyectofinal.daw.search;

import org.hibernate.search.backend.lucene.analysis.LuceneAnalysisConfigurationContext;
import org.hibernate.search.backend.lucene.analysis.LuceneAnalysisConfigurer;
import org.apache.lucene.analysis.charfilter.HTMLStripCharFilterFactory;
import org.apache.lucene.analysis.core.LowerCaseFilterFactory;
import org.apache.lucene.analysis.miscellaneous.ASCIIFoldingFilterFactory;
import org.apache.lucene.analysis.ngram.EdgeNGramFilterFactory;
import org.apache.lucene.analysis.snowball.SnowballPorterFilterFactory;
import org.apache.lucene.analysis.standard.StandardTokenizerFactory;

public class SearchAnalysisConfigurer implements LuceneAnalysisConfigurer{
    
    @Override
    public void configure(LuceneAnalysisConfigurationContext context) {
        context.analyzer( "english" ).custom() 
            .tokenizer( StandardTokenizerFactory.class ) 
            .charFilter( HTMLStripCharFilterFactory.class )
            .tokenFilter( LowerCaseFilterFactory.class ) 
            .tokenFilter( EdgeNGramFilterFactory.class )
            .param( "maxGramSize", "8")
            .param( "minGramSize", "3")
            .tokenFilter( SnowballPorterFilterFactory.class ) 
            .param( "language", "English" ) 
            .tokenFilter( ASCIIFoldingFilterFactory.class );
        context.analyzer( "name" ).custom()
            .tokenizer( StandardTokenizerFactory.class )
            .tokenFilter( LowerCaseFilterFactory.class )
            .tokenFilter( ASCIIFoldingFilterFactory.class );
        context.analyzer("spanish").custom()
            .tokenizer( StandardTokenizerFactory.class ) 
            .charFilter( HTMLStripCharFilterFactory.class )
            .tokenFilter( LowerCaseFilterFactory.class ) 
            .tokenFilter( EdgeNGramFilterFactory.class )
            .param( "maxGramSize", "10")
            .param( "minGramSize", "1")
            .tokenFilter( SnowballPorterFilterFactory.class )            
            .param( "language", "Spanish" ) 
            .tokenFilter( ASCIIFoldingFilterFactory.class );
        context.normalizer("spanish").custom()            
            .tokenFilter( LowerCaseFilterFactory.class ) 
            .tokenFilter( SnowballPorterFilterFactory.class ) 
            .param( "language", "Spanish" ) 
            .tokenFilter( ASCIIFoldingFilterFactory.class );
        
    }
}
